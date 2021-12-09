import { $serviceApi as api } from "@/services/service-api";
const routes = {
  get_all_video_games: "/applicant-test/",
};
// GET ALL VIDEO GAMES
export default {
  async getAllVideoGames() {
    return api.service().fetch(routes.get_all_video_games)
  }
}