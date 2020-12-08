<?php error_reporting(0);
 do_action( 'dokan_dashboard_wrap_start' ); ?>

    <div class="dokan-dashboard-wrap">

        <?php

            /**
             *  dokan_dashboard_content_before hook
             *  dokan_withdraw_content_before hook
             *
             *  @hooked get_dashboard_side_navigation
             *
             *  @since 2.4
             */
            do_action( 'dokan_dashboard_content_before' );
            do_action( 'dokan_withdraw_content_before' );
        ?>

        <div class="dokan-dashboard-content dokan-withdraw-content">

            <?php

                /**
                 *  dokan_withdraw_content_inside_before hook
                 *
                 *  @since 2.4
                 */
                do_action( 'dokan_withdraw_content_inside_before' );
            ?>

            <article class="dokan-withdraw-area">

                <?php
                    /**
                     * dokan_withdraw_header_render hook
                     *
                     * @hooked dokan_coupon_header_render
                     *
                     * @since 2.4
                     */
                    do_action( 'dokan_withdraw_content_area_header' );
				
				
    $callback = get_site_url();
    $appid = get_option('wc_wanderlust_meli_mp_appid');
    $secretkey = get_option('wc_wanderlust_meli_mp_secretkey');
    $my_account_url = get_permalink( get_option('woocommerce_myaccount_page_id') ); 
    $connect_url = 'https://auth.mercadopago.com.co/authorization?client_id='.$appid.'&response_type=code&platform_id=mp&redirect_uri=https://acesco.com.co/stage/dashboard/withdraw/';
    $current_user = wp_get_current_user();
    
    $mpdata = get_user_meta( $current_user->ID, 'mercado_pago_response', true);
    $mpdata_origin = get_user_meta( $current_user->ID, 'mercado_pago_response_origin', true);
               
    if(empty($mpdata)){
      echo '<a href="'.$connect_url.'" style="padding: 15px 25px; height: 50px;  line-height: 50px;  background-color: #fcb800;  transition: all 0.5s;  color: #000; font-size: 16px; font-weight: 600; text-align: center; border: none;" > Autorizar Mercado Pago </a></br></br>';
    } else {
     $mpdata = json_decode($mpdata);
      echo '<h3 style="background: #0099cc;  color: white; padding: 15px 20px;   width: 450px;">Tu cuenta fue vinculada con Mercado Pago - ID: '.$mpdata->user_id.'</h3>';
      $dtF = new \DateTime('@0');
      $dtT = new \DateTime("@$mpdata->expires_in");
       
      $ac = $dtF->diff($dtT)->format('%a');
      
      $date = date('Y-m-j');
      $newdate = strtotime ( '+'.$ac.' day' , $mpdata_origin ) ;
      $newdate = date ( 'j-m-Y' , $newdate );
      
      $now = time(); // or your date as well
      $your_date = strtotime($newdate);
      $datediff = $your_date - $now  ;

      echo '<small>*Faltan '.round($datediff / (60 * 60 * 24)).' dias, para que expire la vinculación.</small> </br></br>';

      
     
      
      echo '<a href="https://acesco.com.co/stage/dashboard/withdraw/?remover=removemp" style="padding: 15px 25px; height: 50px;  line-height: 50px;  background-color: #fcb800;  transition: all 0.5s;  color: #000; font-size: 16px; font-weight: 600; text-align: center; border: none;" > Desvincular Mercado Pago </a></br></br>';

    }
    if($_GET['remover'] == 'removemp') {
      update_user_meta( $current_user->ID, 'mercado_pago_response', '');
      update_user_meta( $current_user->ID, 'mercado_pago_response_origin', '');
  		  @ob_flush();
      @ob_end_flush();
      @ob_end_clean();
		wp_redirect( 'https://acesco.com.co/stage/dashboard/' );
exit;
    }
    if($_GET['code']) {
      update_user_meta( $current_user->ID, 'mercado_pago_code', $_GET['code']);
      $date = strtotime( date('Y-m-d') );
      $access_token = $_GET['code'];
      $data = array('site_id' => 'MLA');

      $ch = curl_init();
      curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
      curl_setopt($ch, CURLOPT_URL,'https://api.mercadopago.com/oauth/token?client_id='.$appid.'&client_secret='.$secretkey.'&grant_type=authorization_code&code='.$access_token.'&redirect_uri=https://acesco.com.co/stage/dashboard/withdraw/');
      curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
      curl_setopt($ch, CURLOPT_POST,1);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      curl_setopt($ch, CURLOPT_POSTFIELDS,$data);
  
      $response = curl_exec($ch);
      $response_decoded = json_decode($response);
      if($response_decoded->access_token){
        
 				update_option( 'wanderlust_meli_mp_'.$response_decoded->user_id , $response_decoded->access_token );
        update_user_meta( $current_user->ID, 'mercado_pago_response', $response);
        update_user_meta( $current_user->ID, 'mercado_pago_response_origin', $date);
        $to = get_option( 'admin_email' );
			  $subject = 'Cuenta Autorizada';
			    
				$header = '<table style="width: 100%;">
							<!--logo-->
							<tr>
              <td style="padding: 8px 0 8px 0; font-family: Verdana; text-align: center;"><a href="'.$callback.'" target="_blank">
              <img src="https://acesco.com.co/stage/wp-content/uploads/2020/07/construyamos-logo-acesco.png" alt="'.$callback.'" width="auto" height="81" />
              </a></td></tr>';

				$body = '<!--Saludo-->
						<!--titulo-->
						<tr><td style="padding: 10px 0 10px 0; font-family: Verdana; text-align: center; font-size:30px">
            <strong>Felicitaciones, un vendedor autorizo su cuenta con tu sitio!</strong>
            </td></tr>
						<!--cuerpo-->
						<tr><td style="padding: 20px 8% 10px 8%; font-family: Verdana;">
              El vendedor ' .$current_user->user_email.' autorizó su cuenta de Mercado Pago con tu sitio web, ahora podra vender con Mercado Pago.
            </td></tr>
						</table>';

				$message = $header . $body;
				 
				add_filter('wp_mail_content_type',create_function('', 'return "text/html"; '));
			  wp_mail( $to, $subject, $message );        
         
		  if ( wp_safe_redirect( 'https://acesco.com.co/stage/dashboard/withdraw/' ) ) {
				exit;
			}
      }

    }   
                ?>

                <div class="entry-content">

                    <?php
                        /**
                         * dokan_withdraw_header_render hook
                         *
                         * @hooked dokan_render_withdraw_error
                         * @hooked dokan_withdraw_status_filter
                         * @hooked dokan_show_seller_balance
                         * @hooked dokan_withdraw_form_and_listing
                         *
                         * @since 2.4
                         */
                        do_action( 'dokan_withdraw_content' );
                    ?>

                </div><!-- .entry-content -->

            </article>

            <?php

                /**
                 *  dokan_withdraw_content_inside_after hook
                 *
                 *  @since 2.4
                 */
                do_action( 'dokan_withdraw_content_inside_after' );
            ?>
        </div><!-- .dokan-dashboard-content -->

         <?php
            /**
             *  dokan_dashboard_content_after hook
             *  dokan_withdraw_content_after hook
             *
             *  @since 2.4
             */
            do_action( 'dokan_dashboard_content_after' );
            do_action( 'dokan_withdraw_content_after' );
        ?>
    </div><!-- .dokan-dashboard-wrap -->

<?php do_action( 'dokan_dashboard_wrap_end' ); ?>
