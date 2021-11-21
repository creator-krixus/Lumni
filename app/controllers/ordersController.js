require('dotenv').config();
const controller = {};

controller.getOrders = (req, res) => {
    req.getConnection((err, conn) => {
        if(err){
            return res.send(err);
        }else{
            conn.query(process.env.SELECT_TABLE, (err, rows) => {
                if(err){
                    return res.send(err);
                }else{
                     res.json(rows);
                }
            })
        }
    })
}

controller.createOrder = (req, res) => {
    req.getConnection((err, conn) => {
        if(err){
            return res.send(err);
        }else{
            conn.query(process.env.CREATE_ORDER, [req.body] ,(err, rows) => {
                if(err){
                    return res.send(err);
                }else{
                     res.send('Registro de pedido exitoso');
                }
            })
        }
    })
}

controller.updateOrder = (req, res) => {
    req.getConnection((err, conn) => {
        if(err){
            return res.send(err);
        }else{
            conn.query(process.env.UPDATE_ORDER, [req.body, req.params.id] ,(err, rows) => {
                if(err){
                    return res.send(err);
                }else{
                     res.send('Orden actualizada');
                }
            })
        }
    })
}

controller.deleteOrder = (req, res) => {
    req.getConnection((err, conn) => {
        if(err){
            return res.send(err);
        }else{
            conn.query(process.env.DELETE_ORDER, [req.params.id] ,(err, rows) => {
                if(err){
                    return res.send(err);
                }else{
                     res.send('Orden borrada');
                }
            })
        }
    })
}

module.exports = controller;