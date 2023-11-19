// dtos/user.dto.js

// sign in response DTO
export const signinResponseDTO = (user, store, mission, challenge) => {
    
    return {"email": user[0].id, "store": user[0].store_id, "mission": mission_id};
}