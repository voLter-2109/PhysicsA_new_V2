interface Error {
	statusCode?: number
}

const Error = ({ statusCode }: Error) => {
	return (
		<p>
			{statusCode
				? `An error ${statusCode} occurred on server`
				: 'An error occurred on client'}
		</p>
	)
}

export const getServerSideProps = ({ res, err }: { res: any; err: any }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}

export default Error
