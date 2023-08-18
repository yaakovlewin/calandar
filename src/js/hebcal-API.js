let converteDate = async (date) => {
    let url = `https://www.hebcal.com/converter?cfg=json&date=${date}&g2h=1&strict=1`
    let hebDateObj = getData(url)
    return hebDateObj;

}

let getData = async (url) => {
    let response = await fetch(url);
    let jsonData = await response.json();
    return jsonData;
}

export default converteDate;