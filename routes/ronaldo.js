const express = require('express');
const axios = require('axios');
const router = express.Router();

// Array of Ronaldo images URLs
const data = [
"https://i.pinimg.com/originals/22/a6/6e/22a66ef9fc1067375df29ee4fd04954b.jpg",  
  
"https://i.pinimg.com/originals/16/85/cc/1685ccb76d0948fa2b1afd534c78df07.jpg",   
  
"https://besthqwallpapers.com/Uploads/13-4-2022/197987/thumb2-4k-cristiano-ronaldo-2022-manchester-united-football-stars.jpg", 
    
"https://wallpapercrafter.com/desktop/29516-Cristiano-Ronaldo-Portugal-Real-Madrid-soccer-4K.jpg", 
  
"https://p4.wallpaperbetter.com/wallpaper/451/899/608/cristiano-ronaldo-4k-wallpaper-preview.jpg", 
  
"https://images7.alphacoders.com/716/716405.jpg",
  
"https://i.pinimg.com/originals/dd/ae/00/ddae00bc11e07c959fd0ac8a2d0399c9.jpg",
  
"https://www.bitbol.la/files/image/48/48103/632a82af20e2f.png",  
  
"https://f.rpp-noticias.io/2022/06/03/1268023274076789-646335246612404-7480425914594186767-njpg.jpg",  
  
"https://static.foxdeportes.com/2021/10/cristiano-ronaldo-manchester-united-rts-545x907.jpg",  
  
"https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2021/06/10/16233199183125.jpg",  
  
"https://cdn2.mediotiempo.com/uploads/media/2019/08/06/cristiano-ronaldo-revela-significado-grito.jpg",  
  
"https://media.vandal.net/i/1200x630/9-2017/201792611530_1.jpg",  
  
"https://www.elimparcial.com/__export/1579046867304/sites/elimparcial/img/2020/01/14/lourdes_vega_6_crop1579046866069.jpg_1902800913.jpg",  
  
"https://cdn2.rsvponline.mx/files/rsvp/styles/4x3_large/public/images/main/2022/qatar_2022-_cristiano_ronaldo_sera_castigado_y_multado_por_el_incidente_con_el_telefono_de_fan.jpg", 
  
"https://64.media.tumblr.com/8db29dbf60ea9ec68eda5a354f2d43d0/4762017af9821097-5a/s1280x1920/cf7090c5773b6cb2a0970583767bb2ae877024cf.jpg",  
  
"https://depor.com/resizer/2hgjg9FglsZQ48cZ6jCOHWguN_k=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WVFH5OOLUZESND4CMTBWMBFTLM.jpg",
  
"https://media.revistagq.com/photos/5e337ba67c484c00080a1dd9/4:3/w_3732,h_2799,c_limit/GettyImages-1163338011.jpg"  
];


// Endpoint to get a random Ronaldo image
router.get('/ronaldo', async (req, res) => {
    try {
        // Get a random image URL from the data array
        const randomImageUrl = data[Math.floor(Math.random() * data.length)];
        // Fetch the image data
        const imageResponse = await axios.get(randomImageUrl, { responseType: 'arraybuffer' });
        // Set the response headers
        res.set('Content-Type', 'image/jpeg');
        res.send(imageResponse.data);
    } catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
