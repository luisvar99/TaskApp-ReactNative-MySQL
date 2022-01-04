import {connection} from '../database'

export const getTasks = async (req,res) => {
    const connect = await connection();
    const [rows] = await connect.execute("SELECT * FROM tasks");
    res.json(rows);
}

export const getTask = async (req,res) => {
    const connect = await connection()
    const [rows] = await connect.query('SELECT * FROM tasks WHERE id = ?',
    [req.params.id]
    );
    res.json(rows[0]);
}

export const getTaskCount = async (req,res) => {
    const connect = await connection()
    const [rows] = await connect.query('SELECT COUNT(*) FROM tasks')
    res.json(rows[0]["COUNT(*)"])
}

export const saveTask = async (req,res) => {
    const connect = await connection()
    const [results] = await connect.query('INSERT INTO tasks(title, description) VALUES (?,?)',
    [req.body.title, 
    req.body.description
    ]);   
    res.json({
        id: results.insertId,
        ...req.body
    }) 
}

export const deleteTask = async (req,res) => {
    const connect = await connection()
    await connect.query('DELETE FROM tasks WHERE id = ?',
    [req.params.id]
    );
    res.sendStatus(204)
}

export const updateTask = async (req,res) => {
    const connect = await connection()
    const result = await connect.query('UPDATE tasks SET ? WHERE id = ?', 
    [   req.body,
        req.params.id
    ]);
}
