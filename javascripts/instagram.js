function callInstagram($url)
{
$ch = curl_init();
curl_setopt_array($ch, array(
CURLOPT_URL => $url,
CURLOPT_RETURNTRANSFER => true,
CURLOPT_SSL_VERIFYPEER => false,
CURLOPT_SSL_VERIFYHOST => 2
));

$result = curl_exec($ch);
curl_close($ch);
return $result;
}

$tag = password ;
$client_id = "096fe900ccfe403db4f9b278a6bcdf9f";

$url = 'https://api.instagram.com/v1/tags/'.$tag.'/media/recent?client_id='.$client_id;

$inst_stream = callInstagram($url);
$results = json_decode($inst_stream, true);

//Now parse through the $results array to display your results... 
foreach($results['data'] as $item){
    $image_link = $item['images']['low_resolution']['url'];
    echo '<img src="'.$image_link.'" />';
}

//Code by Ismail Altunoren, Stackoverflow

