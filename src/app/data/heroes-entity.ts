export interface Heroes {
    estado: number,
    msg: string,
    heroes:
    [
        {
            id?: number,
            nombre: string,
            poder: string,
            universo: string,
            debilidad: string,
            urlImagen: string
        }
    ],
    links: [
        {
            rel: string,
            href: string
        }
    ]
}