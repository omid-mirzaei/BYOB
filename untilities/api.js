var api = {
    getRovers(){
        var url = `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=avcq7Zh0fKgQQT9HOJEnUkdcNgxBFA9b7CVfDnfe`;
        return fetch(url).then((res) => res.json());
        
    }
}
module.exports = api;