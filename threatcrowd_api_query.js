const request = require('request');


// Example of threatcrowd allows queries
// https://www.threatcrowd.org/searchApi/v2/email/report/?email=william19770319@yahoo.com
// https://www.threatcrowd.org/searchApi/v2/domain/report/?domain=aoldaily.com
// https://www.threatcrowd.org/searchApi/v2/ip/report/?ip=188.40.75.132
// https://www.threatcrowd.org/searchApi/v2/antivirus/report/?antivirus=plugx
// https://www.threatcrowd.org/searchApi/v2/file/report/?resource=ec8c89aa5e521572c74e2dd02a4daf78

var threatcrowd = (option /*which would be on of these "email","domain","ip",antivirus", "file"*/, data) => {
    if(option === 'file'){
        request({
            url: `https://www.threatcrowd.org/searchApi/v2/${option}/report/?resource=${data}`,
            json: true
        },(error, response, body) =>  {
            if(error) {
                console.log('Something went wrong');
            }else if(response.statusCode === '404'){
                console.log('Domain not found');
            }else
            console.log(JSON.stringify(response, undefined, 2));
    });
    }else
    request({
        url: `https://www.threatcrowd.org/searchApi/v2/${option}/report/?${option}=${data}`,
        json: true
    },(error, response, body) =>  {
        if(error) {
            console.log('Something went wrong');
        }else if(response.statusCode === '404'){
            console.log('Domain not found');
        }else
        console.log(JSON.stringify(response, undefined, 2));
        // var email = response.body['domains'];
        // console.log(`Domains owned by this email: ${email}`)
        
});
};

//how to call the threatcrowd function
//threatcrowd('email', 'william19770319@yahoo.com');
//threatcrowd('ip', '185.106.120.101');
//threatcrowd('domain', 'aoldaily.com');
//threatcrowd('antivirus', 'plugx');
//threatcrowd('file', 'ec8c89aa5e521572c74e2dd02a4daf78');

module.exports.threatcrowd = threatcrowd;