function generateCSS() {
    return `
        * {
            font-family: "Times New Roman", Times, serif;
        }
        main {
            display: flex;
            justify-content: center;
        }
        h1 {
            color: white;
            background-color: red;
            font-size: 18px;
            text-align: center;
        }
        h2 {
            font-size: 12px;
        }
        h3 {
            font-size: 12px;
        }
        
    `
}

module.exports = generateCSS;