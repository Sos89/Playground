import verification from "./../../service/auth-service";
export async function fetchCode ({commit}, payload) {
  try {
    const res = await verification.verification_code(payload)
      commit('setCode', res)
  }
  catch (err) {
    console.log(err);
  }
}
