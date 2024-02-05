let url = "http://ip-api.com/json/?fields=8450015&lang=VI"
$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
	let query =jsonData.query 
	let isp =jsonData.isp
	let as =jsonData.as
	let country =jsonData.country
	let city =jsonData.city
	let timezone =jsonData.timezone
	let lon =jsonData.lon
	let lat =jsonData.lat
	let currency =jsonData.currency
    let emoji = getFlagEmoji(jsonData.countryCode)
const params = getParams($argument);
  body = {
    title: " THÔNG TIN PROXY ",
    content: `IP：${query}\nISP：${isp}\nASN：${as}\nKhu vực：${emoji}${country}\nThành phố：${city}\nMúi giờ：${timezone}\nKinh,vĩ độ：${lon},${lat}\nTiền tệ：${currency}`,
        icon: params.icon,
        "icon-color": params.color
  }
  $done(body);
});

function getFlagEmoji(countryCode) {
      if (countryCode.toUpperCase() == 'VI') {
    countryCode = 'VI'
  }
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

function getParams(param) {
  return Object.fromEntries(
    $argument
      .split("&")
      .map((item) => item.split("="))
      .map(([k, v]) => [k, decodeURIComponent(v)])
  );
}
