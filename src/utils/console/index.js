const error = message => {
	console.error(`[react-amplitude] ${message}`);
}

const log = message => {
	console.info(`[react-amplitude] ${message}`);
}

const warn = message => {
	console.warn(`[react-amplitude] ${message}`);
}

export default { error, log, warn };
export { error, log, warn };