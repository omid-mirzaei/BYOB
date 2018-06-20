var api = {
    getRovers(){
        var url = `http://data.fixer.io/api/latest?access_key=459dc535ec3a87e68f189c057954dd81`;
        return fetch(url).then((res) => res.json());
        
    }
}
module.exports = api;