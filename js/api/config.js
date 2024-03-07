// import del package che mi rende disponibili le variabili d'ambiente
import dotenv from 'dotenv';

// carica le variabili d'ambiente dal file .env
dotenv.config();
// per leggere il valore di una variabile d'ambiente utilizzo process.env.NOME_VARIABILE

export const OPTIONS = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`
    }
}

export const BASE_URL = 'https://api.themoviedb.org/3/';

