<template>
  <div class="all">
    <div class="row">
      <p class="profile_text">My Profile</p>
    </div>
    <div class="first_div">
      <p class="info_text">General Info</p>
      <div class="info_div row">
        <div class="column">
          <div class="row">
            <FirstName
              v-if="getUser"
              :first-name="getUser.firstName"
            ></FirstName>
            <LastName
              v-if="getUser"
              :last-name="getUser.lastName"
            ></LastName>
            <BirthDataInput
              v-if="getUser"
              :birth-day="getUser.dateOfBirth"
            ></BirthDataInput>
          </div>
          <div class="row email">
            <EmailInput
              v-if="getUser"
              :email="getUser.email"
            ></EmailInput>
            <PersonalEmail
              v-if="getUser"
              :personal="getUser.personalEmail"
            ></PersonalEmail>
            <PhoneNumber
              v-if="getUser"
              :phone-number="getUser.mobilePhone"
            ></PhoneNumber>
          </div>
          <div class="for_address_row">
            <StartInput
              v-if="getUser"
              :start-data="getUser.startDate"
            ></StartInput>
            <AbsenceS></AbsenceS>
            <CheckBox></CheckBox>
          </div>
        </div>
        <div class="myAccountDiv">
          <SlackProfile
            v-if="getUser"
            :slack="getUser.slackUserName"
          ></SlackProfile>
          <GitHubProfile
            v-if="getUser"
            :git="getUser.gitHubUserName"
          ></GitHubProfile>
        </div>
      </div>
    </div>
    <div class="second_div">
      <p class="work">Work logs</p>
      <div class="work-day">
        <div>
          <p class="daysName">Sunday</p>
          <SundayInput></SundayInput>
          <q-btn class="create_btn_sunday" color="white" text-color="black" label="+" />
        </div>
        <div>
          <p class="daysName">Monday</p>
          <MondayInput></MondayInput>
          <MondayNext></MondayNext>
          <q-btn class="create_btn" color="white" text-color="black" label="+" />
        </div>
        <div>
          <p class="daysName">Tuesday</p>
          <TuesdayInput></TuesdayInput>
          <TuesdayNext></TuesdayNext>
          <q-btn class="create_btn" color="white" text-color="black" label="+" />
        </div>
        <div>
          <p class="daysName">Wednesday</p>
          <WednesdayInput></WednesdayInput>
          <WednesdayNext></WednesdayNext>
          <q-btn class="create_btn" color="white" text-color="black" label="+" />
        </div>
        <div>
          <p class="daysName">Friday</p>
          <FridayInput></FridayInput>
          <FridayNext></FridayNext>
          <q-btn class="create_btn" color="white" text-color="black" label="+" />
        </div>
        <div>
          <p class="daysName">Friday</p>
          <ThursdayInput></ThursdayInput>
          <q-btn class="create_btn" color="white" text-color="black">+</q-btn>
        </div>
      </div>

    </div>
  </div>


</template>

<script>
import FirstName from "components/profile/FirstName";
import LastName from "components/profile/LastName";
import BirthDataInput from "components/profile/BirthDataInput";
import EmailInput from "components/profile/EmailInput";
import PersonalEmail from "components/profile/PersonalEmail";
import PhoneNumber from "components/profile/PhoneNumber";
import StartInput from "components/profile/StartInput";
import AbsenceS from "components/profile/AbsencesInput";
import CheckBox from "components/profile/CheckBox";
import SlackProfile from "components/profile/SlackProfile";
import GitHubProfile from "components/profile/GitHubProfile";
import SundayInput from "components/profile/Sunday";
import MondayInput from "components/profile/Monday/Monday";
import MondayNext from "components/profile/Monday/MondayNext";
import TuesdayInput from "components/profile/Tuesday/Tuesday";
import TuesdayNext from "components/profile/Tuesday/TuesdayNext";
import WednesdayInput from "components/profile/Wednesday/Wednesday";
import WednesdayNext from "components/profile/Wednesday/WednesdayNext";
import FridayInput from "components/profile/Friday/Friday";
import FridayNext from "components/profile/Friday/FridayNext";
import ThursdayInput from "components/profile/Thursday/Thursday";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MyProfile",
  components: { ThursdayInput, FridayNext, FridayInput, WednesdayNext, WednesdayInput, TuesdayNext, TuesdayInput, MondayNext, MondayInput, SundayInput, GitHubProfile, SlackProfile, CheckBox, AbsenceS, StartInput, PhoneNumber, PersonalEmail, EmailInput, BirthDataInput, LastName, FirstName },

  async  created() {
   await this.fetchUsers()
  },
  // mounted() {
  //   if (this.getCode !== localStorage.token && this.getEmail !== localStorage.res){
  //     this.$router.push('/')
  //   }
  // },
  computed: {
    ...mapGetters('login',['getCode']),
    ...mapGetters('email',['getEmail']),
    ...mapGetters('user',['getUser']),
  },
  methods: {
    ...mapActions('user', ['fetchUsers']),
  }
};
</script>

<style scoped>
.all{
  height: 100vh;
}
.first_div{
  margin-top: 16px;
}
.email{
  margin-top: 18px;
  display: flex;
  flex-wrap: nowrap;
}
.for_address_row{
  margin-top: 18px;
  display: flex;
  flex-wrap: nowrap;
}
.info_div{
  width: 1095px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.profile_text{
  width: 110px;
  height: 32px;
  margin-left: 100px;
  margin-top: 15px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #003367;
}
.info_text{
  width: 110px;
  height: 32px;
  margin-left: 120px;
  margin-top: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  color: #003367;
}
.myAccountDiv{
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: -62px;
}
.second_div{
  display: flex;
  flex-direction: column;
  margin: 0;
}
.work{
  width: 90px;
  height: 32px;
  margin-left: 120px;
  margin-top: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  color: #003367;
}

.daysName{
  margin-left: 120px;
  margin-right: 10px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #546E7B;
}
.create_btn_sunday{
  margin-left: 120px;
  top: 80px;
  width: 223px;
  height: 32px;
  background: #F5F6F7;
  border-radius: 4px;
  color: #95A2A7!important;
}
.create_btn{
  margin-left: 20px;
  top: 80px;
  width: 223px;
  height: 32px!important;
  background: #F5F6F7;
  border-radius: 4px;
  color: #95A2A7!important;
}

.work-day{
  display: flex;
  flex-direction: row;
}
</style>
