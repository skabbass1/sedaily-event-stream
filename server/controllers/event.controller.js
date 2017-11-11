import Bluebird from 'bluebird';
import producer from '../helpers/Producer';
import consumer from '../helpers/Consumer';

consumer.listenForMessages()

function list(req, res, next) {
	var event = {
			client_id: '235823455',
			device_type: 'iPhone 6',
			location: 'Seattle, WA',
			event_time: new Date(),
			event_type: 'login'
		}
	producer.sendMessage(event.event_type, JSON.stringify(event));
  res.json({hello: 'world'});
}

function loginEvent(req, res, next) {
	res.json({hello: 'world'});
}

export default { list, loginEvent };