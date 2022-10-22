const TodoModel=require('./model')
module.exports={
    home: function (req, res) {
        res.send("Welcome to todos restful api v1.0")
    },
    todos: function (req, res) {
        console.log(req.query)
      
        if (req.query.title !== undefined && req.query.username !== undefined) {
            TodoModel.find({ title: { $regex: req.query.title }, username: req.query.username })
                .then(results => {
                    res.json({
                        message: 'ok',
                        todos: results
                    })
                })
        } else if (req.query.title !== undefined) {
            TodoModel.find({ title: { $regex: req.query.title } })
                .then(results => {
                    res.json({
                        message: 'ok',
                        todos: results
                    })
                })
    
        } else {
            TodoModel.find({})
                .then(todos => res.json({ message: 'ok', todos: todos }))
        }
    },
    saveTodo:function (req, res){
        let todo = new TodoModel(req.body)
        todo.save()
            .then(result => {
                res.json({
                    message: 'ok',
                    todo: result
                })
            })
    },
    notfound: function (req, res) {
        res.json({ message: 'not found' })
    }
}



// app.get('/todos/:title/:username',(req,res)=>{
//     console.log(req.params)
// })

// // search a todo by keyword
// app.get('/search', (req, res) => {
//     if (req.query.title !== undefined) {
//         TodoModel.find({ title: { $regex: req.query.title } })
//             .then(results => {
//                 res.json({
//                     message: 'ok',
//                     todos: results
//                 })
//             })
//     }else{
//         res.send('use ?title=keyword')
//     }
// })

