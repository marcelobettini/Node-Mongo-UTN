//commonJS
const http = require('node:http')
const PORT = process.env.PORT ?? 8000

const movies = [
    {
        id: "1a2b3c4d-1234-5678-9101-1a2b3c4d5e6f",
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        release: 1994,
        rating: 91,
    },
    {
        id: "2b3c4d5e-1234-5678-9101-2b3c4d5e6f7g",
        title: "The Godfather",
        director: "Francis Ford Coppola",
        release: 1972,
        rating: 97,
    },
    {
        id: "3c4d5e6f-1234-5678-9101-3c4d5e6f7g8h",
        title: "The Dark Knight",
        director: "Christopher Nolan",
        release: 2008,
        rating: 94,
    },
    {
        id: "4d5e6f7g-1234-5678-9101-4d5e6f7g8h9i",
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        release: 1994,
        rating: 94,
    },
    {
        id: "5e6f7g8h-1234-5678-9101-5e6f7g8h9i0j",
        title: "The Lord of the Rings: The Return of the King",
        director: "Peter Jackson",
        release: 2003,
        rating: 93,
    },
    {
        id: "6f7g8h9i-1234-5678-9101-6f7g8h9i0j1k",
        title: "Fight Club",
        director: "David Fincher",
        release: 1999,
        rating: 88,
    },
    {
        id: "7g8h9i0j-1234-5678-9101-7g8h9i0j1k2l",
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        release: 1994,
        rating: 89,
    },
    {
        id: "8h9i0j1k-1234-5678-9101-8h9i0j1k2l3m",
        title: "Inception",
        director: "Christopher Nolan",
        release: 2010,
        rating: 87,
    },
    {
        id: "9i0j1k2l-1234-5678-9101-9i0j1k2l3m4n",
        title: "The Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        release: 1999,
        rating: 87,
    },
    {
        id: "0j1k2l3m-1234-5678-9101-0j1k2l3m4n5o",
        title: "The Empire Strikes Back",
        director: "Irvin Kershner",
        release: 1980,
        rating: 94,
    },
]

http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(`
                <h1>Netflix Toraba</h1>
                <h3>Las mejores pelis del mundo mundial</h3>   
                <a href="/movies"
                style="display: inline-block; border: none; border-radius: 8px; background-color: hotpink; color: white; padding: 1rem; text-decoration: none; text-transform: uppercase
                ">Pelis Disponibles</a>             
                `)
            break;
        case "/movies":
            res.writeHead(200, { "Content-Type": "text/json" })
            res.end(JSON.stringify(movies))
            break;
        case "/about":
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf8" })
            res.end('Información sobre nosotros. 😁')
            break;
        default:
            res.writeHead(404, { "content-type": "text/plain; charset=utf8 " })
            res.end('Página no encontrada. 😥')
            break;
    }
}).listen(PORT, (err) => {
    !err ?
        console.log(`server running on http://localhost:${PORT}.\n Press Ctrl+C to terminate...`)
        :
        console.log(`server failed with error: ${err}.`)

})

//ES Modules