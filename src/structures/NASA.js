import axios from 'axios';
import moment from 'moment';
import config from '../../config.js';

export default class NASA {
  constructor() {
    this.apiKey = config.apiKey;
  }

  /**
   *
   * @param {String} date The date of the APOD
   * @returns Title of APOD, Explanation, Date, and HDURL
   */
  async apod(date = moment().format('YYYY-MM-DD')) {
    // if (date.split('') !== '.') {
    //   throw new Error('Invalid Date provided to APOD!');
    // }

    const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&date=${date}`);
    return {
      title: data.title, explanation: data.explanation, date, hdurl: data.hdurl,
    };
  }
}
