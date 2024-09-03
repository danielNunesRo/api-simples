const Post = require('../models/Post');

module.exports = class PostController {
    
    static async create(req, res) {
        try {
            const {title, author} = req.body;
            const newPost = await Post.create({title, author})
            res.status(200).json(newPost)
        } catch(error) {
            res.status(500).json({error : "Erro ao criar post"})
        }
    }

    static async findAll(req, res) {
        try {
            const post = await Post.findAll();
            res.status(200).json(posts);
        } catch(error) {
            res.status(500).json({error : "Erro ao buscar todos"})
        }
    }

    static async findById(req, res) {
        try {
            const {id} = req.params;
            const post = await Post.findByPk(id);
            if(post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({message: "Post não localizado!"});
            }
        } catch(error) {
            res.status(500).json({error: "Erro ao procurar por id"});
        }
    }

    static async updatePost(req, res) {
        try {
            const { id } = req.params;
            const { title, author } = req.body;
            const [updated] = await Post.update({ title, author }, {
                where: { id },
            });
            if (updated) {
                const updatedPost = await Post.findByPk(id);
                res.status(200).json(updatedPost);
            } else {
                res.status(404).json({ error: 'Post não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar o post' });
        }
    }

    static async deletePost(req, res) {
        try {
            const { id } = req.params;
            const deleted = await Post.destroy({
                where: { id },
            });
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Post não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar o post' });
        }
    }


}