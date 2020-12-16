<?php
 //$tokens = implode(',',$tokens);
        $api_key = "";
        $fcm = "dDJu_NWpQtmdRdPssw7-4f:APA91bFlcr4jJhk-ZUXPcO_bnuT3wIkv_lLy6syzVcYAjwciVabr28T17vJrOxg_9RiTMNBHFzSR0O-vxqZjzQhOqjtJaFFFn2MW_K-5QuLaRop8vTcbw_iglj1-vatqHvBEJ65CqLK5";
        $body = "Bu kısım php den geldi";
        $title = "Bildirim";
        $fields = array(
            "body" => $body,
            "title" => $title,
        );


        $fields = array(
            //"to" => $fcm,
            "registration_ids" =>[
                "dDJu_NWpQtmdRdPssw7-4f:APA91bFlcr4jJhk-ZUXPcO_bnuT3wIkv_lLy6syzVcYAjwciVabr28T17vJrOxg_9RiTMNBHFzSR0O-vxqZjzQhOqjtJaFFFn2MW_K-5QuLaRop8vTcbw_iglj1-vatqHvBEJ65CqLK5",
                "e4Qbj9a-UEHXvYUgeqmNah:APA91bFsrEzg3DrJX2QJ4CVbKrDrBbBuGKBhWWjcO36shEcDtGhQmB9v9RdGpxj4yYDZ7J4CwLQ_0sx_avJz8EfZz3SpW3oTRkIlR5-7Sva_nPdUNteUVSY13SIx--Xgb16lvmUpbzYI"
            ],
            "notification" => $fields,
            "priority"=>'high',
            "content_available"=>true,
            "apns"=> [ 'payload' => [ 'aps' =>[ "content-available"=> true,'contentAvailable'=>true ]] ],
            "contentAvailable"=>true

        );






        $fields= json_encode($fields);

        $headers = array
        (
            'Authorization: key=' . $api_key,
            'Content-Type: application/json'
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, ( $fields));
        curl_setopt($ch, CURLOPT_TIMEOUT, 10); //timeout in seconds

        $result = curl_exec($ch);
        $x = json_decode($result,true);
        print_r($x);
        curl_close($ch);

