import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface DataState {
  data: ModelResume
}

const initialState: DataState = {
  data: {
    firstname: 'John',
    lastname: 'Doe',
    birthdate: '1992/01/05',
    nationality: 'German',
    title: 'Job Engineer',
    description: '',
    contact: {
      phone: '0102030405',
      email: 'john.doe@gmail.com',
      address: '25 Unknown Street 98765 Neverwhere'
    },
    social: {
      linkedin: 'http://',
      facebook: 'http://',
      instagram: 'http://',
      codingame: 'http://',
      stackoverflow: 'http://',
      github: 'http://'
    },
    expertise: [{
      name: 'english',
      description: 'fluent'
    }, {
      name: 'german',
      description: 'native'
    }],
    education: [{
      startdate: '2010/09/01',
      enddate: '2012/07/01',
      school: 'School of Skills',
      diploma: 'Jober',
      description: '',
      skills: []
    }, {
      startdate: '2012/09/01',
      enddate: '2014/07/01',
      school: 'University of Mastery',
      diploma: 'Master',
      description: '',
      skills: []
    }],
    experience: [{
      startdate: '2015/01/12',
      enddate: '2021/03/01',
      company: 'World Company',
      jobtitle: 'Apprentice',
      description: 'Learner',
      skills: []
    }, {
      startdate: '2022/01/12',
      enddate: '',
      company: 'Small Company',
      jobtitle: 'Manager',
      description: 'Big boss',
      skills: []
    }],
    langages: [{
      lang: 'english',
      skill: 'fluent'
    }, {
      lang: 'german',
      skill: 'native'
    }],
    hobbies: [{
      name: 'sky',
      description: ''
    }]
  }
}

export const DataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<ModelResume>) => {
      state.data = action.payload
    }
  },
})

export const {
  update
} = DataSlice.actions

export default DataSlice.reducer