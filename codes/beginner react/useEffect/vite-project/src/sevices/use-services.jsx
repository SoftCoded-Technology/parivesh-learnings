import apiClient, { CanceledError } from "./api-client";

class Services {
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get("/users", {
      signal: controller.signal,
    });

    return {request,cancel:()=>controller.abort()};
  }

  deleteUser(id){
    return apiClient.delete("/users/" + id)
  } 

  updateUser(user) {
    return apiClient.patch("/users/" + user.id, user)
  }
}

export default new Services();
