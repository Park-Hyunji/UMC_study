// models/user.dao.js

import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { connectFoodCategory, confirmEmail, getUserID, insertUserSql, getPreferToUserID } from "./user.sql.js";


export const addReview = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        const [confirm] = await pool.query(confirmStore, data.store);

        if(confirm[0].isExistStore){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertReview, [data.user, data.store, data.mission_id]);

        conn.release();
        return result[0].insertReview;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 미션 추가
export const addMission = async (mission_id) => {
    try {
        const conn = await pool.getConnection();
        const [user] = await pool.query(addReview, review_id);

        console.log(user);

        if(mission.length == 0){
            return -1;
        }

        conn.release();
        return user;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 미션 추가
export const challenge = async (store_id, mission_id,chaellge_id) => {
    try {
        const conn = await pool.getConnection();
        
        await pool.query(challenge_id, [store_id]);

        conn.release();
        
        return;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);

    }
}

