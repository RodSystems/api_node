const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/users', (request, response, next) => {
    //console.log(request.query.id);    
    //console.log(response);
    console.log("Entrei na rota USERS")
    response.json({ success: true });
})

app.listen(port, () => {
    console.log(`App Listening on port ${port}`);
});

console.log('Meu Ambiente', process.env.NODE_ENV);