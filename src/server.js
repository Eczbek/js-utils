
import { createServer } from 'http';
import { createReadStream } from 'fs';
import { join } from 'path';


export function getURLPath (url) {
	return new URL(url, 'http://0.0.0.0').pathname;
}

export function createHTTPServer (servePath, port, echo = false) {
	return createServer((request, response) => {
		if (echo && request.method === 'POST') return request.pipe(response);
		const readStream = createReadStream(join(servePath, getURLPath(request.url)))
			.on('error', () => response.end('404'))
			.on('open', () => readStream.pipe(response));
	}).listen(port);
}
