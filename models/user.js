const db = require('./database');       
module.exports = {
    AddUser: async function(user) {
        try {
            const result = await db.query('INSERT INTO user SET ?', user);
            return {result: result, error: null};
        } catch (error) {
            return {result: null, error: error};
        }
    },
    GetUser: async function(id) {
        try {
            const result = await db.query('SELECT * from user where id = ?', id);
            return {result: result, error: null};
        } catch (error) {
            return {result: null, error: error};
        }
    },
    /*
    UpdateUser: async function(id, updatedData) {
        try {
            const result = await db.query('UPDATE user SET ? WHERE id = ?', [updatedData, id]);
            return { result: result, error: null };
        } catch (error) {
            return { result: null, error: error };
        }
    },
    */
    UpdateUser: async function(user) {
        try {
            const result = await db.query('update user set email = ?, age = ?, sex = ?, height = ?, weight = ?, sick1 = ?, sick2 = ?, sick3 = ?, sick4 = ?, sick5 = ?, allergy1 = ?, allergy2 = ?, allergy3 = ?, allergy4 = ?, allergy5 = ?, significant1 = ?, significant2 = ?, significant3 =?, significant4 = ?, significant5 = ? where id = ?',[user.email, user.age, user.sex, user.height, user.weight, user.sick1, user.sick2, user.sick3, user.sick4, user.sick5, user.allergy1 , user.allergy2 , user.allergy3, user.allergy4, user.allergy5, user.significant1, user.significant2, user.significant3, user.significant4, user.significant5, user.id]);
            //const result = await db.query('update user set age="60" where id = "randomid"');
            return { result: result, error: null };
        } catch (error) {
            return { result: null, error: error };
        }
    },
}
