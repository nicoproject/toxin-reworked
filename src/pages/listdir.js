const fs = require('fs')
const path = require('path')

const fetchFiles = async (targetPath) => {
	const files = await fs.promises.readdir(targetPath)
	const fetchedFiles = []

	for (const file of files) {
		try {
			const filepath = path.join(targetPath, file)
			const stats = await fs.promises.lstat(filepath)

			if (stats.isFile() && file.slice(-4) === '.pug') {
				fetchedFiles.push(filepath)
			}

			if (stats.isDirectory()) {
				const childFiles = await fs.promises.readdir(filepath)
				files.push(...childFiles.map((f) => path.join(file, f)))
			}
		} catch (err) {
			console.error(err)
		}
	}

	return fetchedFiles
}

const run = async () => {
	try {
		const files = await fetchFiles('src/pages')
		// console.log(files)
		return files
	} catch (err) {
		console.error(err)
	}
}

const fetchedFiles = run().then((value) => value)

setTimeout(()=> {
	console.log('fetchedFiles', fetchedFiles)
}, 1000)


// fetchedFiles.then((value) => {
// 	console.log(value)
// })
