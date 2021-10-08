import { configure } from 'enzyme';
// @ts-ignore
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom/extend-expect';

configure({ adapter: new Adapter() });
