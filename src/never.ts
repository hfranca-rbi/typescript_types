

function generateError(msg: string, code: number): never {
    throw { message: msg, statusCode: code };
}


generateError("Ocorreu um erro inesperado", 500);

