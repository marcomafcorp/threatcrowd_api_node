# threatcrowd_api_node
You can use this as a stand along js file or you can you can download it as an npm package to make a request to the threatcrowd api


# threatcrowd
Query request to ThreatCrowd's API for Node JS

# Install Instructions

## Local Directory
In the directory in question, run this command:
```
npm install threatcrowd --save
```
## Global
Assuming you have the rights to do so, run this command:
```
npm install -g node-virustotal
``` 
# Background Information

I built this for myself to query threatcrowd and I figured I would publish this as an npm package because other people would have to write these simple lines code.

# Usage

```javascript
threatcrowd('email', 'william19770319@yahoo.com');
threatcrowd('ip', '185.106.120.101');
threatcrowd('domain', 'aoldaily.com');
threatcrowd('antivirus', 'plugx');
threatcrowd('file', 'ec8c89aa5e521572c74e2dd02a4daf78');
```


# Source
<https://github.com/marcomafcorp/threatcrowd_api_node>



