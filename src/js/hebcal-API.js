let converteDate = async (firstDate, lastDate) => {
    let url = `https://www.hebcal.com/converter?cfg=json&start=${firstDate}&end=${lastDate}&g2h=1&lg=he-x-NoNikud`
    let hebDateObj = getData(url)
    return hebDateObj;

}

let getData = async (url) => {
    let response = await fetch(url);
    let jsonData = await response.json();
    return jsonData;
}

export default converteDate;