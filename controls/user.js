
// Get all data from quotes text file
const fs = require('fs')
const path = require('path')
const root = path.dirname(require.main.filename)
const qoutesDir = path.join(root, '/quotes/')


// Get all quotes
// METHOD : GET
// ACCESS: public



const getQuotesFromFile = (req, res) => {
    // get all files
    try {
        const quotes = []
        fs.readdir(qoutesDir,(err, files) => {
            for (file of files) {
                let data = fs.readFileSync(qoutesDir + file, "utf8")
                for (qoute of data.split('\r\n')) {
                    quotes.push(qoute)
                }
            }
            res.status(201).json({mesg: 'all quotes', quotes: quotes})
        })
    } catch (err) {
        res.status(404).json({mesg: 'File Not Found :('})
    }
    
}



// Get quotes by type
// METHOD : GET
// ACCESS: public

const getQuotesTypes = (req, res) => {
    const type = req.params.type
    if (type) {
        const quotes = []
        try {
            let data = fs.readFileSync(`${qoutesDir}${type}.txt`, "utf-8")
            if (data) {
                res.status(201).json({mesg:`all quotes about ${type}`, quotes: data.split('\n')})
            }
        } catch (err) {
            res.status(404).json({mesg: 'Type Not Found :('})
        }
    }
}

module.exports = {
    getQuotesFromFile,
    getQuotesTypes
}