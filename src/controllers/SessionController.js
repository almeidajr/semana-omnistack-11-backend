const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;
        const ngo = await connection('ngos').where('id', id).select('name').first();

        if (!ngo) {
            return response.status(400).json({
                error: 'No NGO found with this ID'
            });
        }

        return response.json(ngo);
        const ngo_id = request.headers.authorization;
        const incidents = await connection('incidents').where('ngo_id', ngo_id).select('*');
        return response.json(incidents);
    }
}