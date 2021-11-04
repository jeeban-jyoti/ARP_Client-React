import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(12)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  date: sample(['15-03-2017', '22-09-2021']),
  sem: sample(['autumn-2019', 'spring-2020']),
  type: sample(['endsem', 'midsem', 'tutorial', 'other', 'quiz']),
  description: sample(['', faker.lorem.words(4)]),
  courseId: sample(['CS3L002', 'EE1L003', 'ID3L002']),
  courseName: sample([
    'Introduction to Prgoramming and Data Structures',
    'Signals and Systems',
    'Introduction to Machine Learing'
  ]),
  branch: sample(['CSE', 'EE', 'Other']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer'
  ])
}));

export default users;
