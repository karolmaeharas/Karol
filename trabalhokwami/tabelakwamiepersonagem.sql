CREATE TABLE kwami(
    id_usuario INTEGER PRIMARY KEY,
    nome text NOT NULL UNIQUE,
    animal text NOT NULL UNIQUE,
    conceito text NOT NULL UNIQUE
);

CREATE TABLE personagem(
    id_usuario INTEGER PRIMARY KEY,
    nome text NOT NULL UNIQUE,
    idade number NOT NULL,
    miraculous text NOT NULL
);
