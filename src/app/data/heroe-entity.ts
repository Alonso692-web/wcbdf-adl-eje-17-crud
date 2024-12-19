export interface Heroe {
    estado: number,
    msg: string,
    heroe: {
        id?: number,
        nombre: string,
        poder: string,
        universo: string,
        debilidad: string,
        urlImagen: string
    },
    links: [
        {
            rel: string,
            href: string
        }
    ]
}