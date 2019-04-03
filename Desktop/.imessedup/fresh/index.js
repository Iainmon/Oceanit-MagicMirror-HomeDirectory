const yesno = require('yesno');
const chalk = require('chalk');
const execSync = require('child_process').execSync;

const print = (input) => {console.log(chalk.blue.bold(input));};
const log = (input) => {console.log(chalk.yellow.bold(input));};

const exec = (input) => {
	console.log(chalk.magenta.bold(` > ${input}`));
	console.log(chalk.magenta(`   ${execSync(input)}`));
};


function run() {
	print('Deleting MagicMirror...');
	exec('rm -rf MagicMirror');
	log('MagicMirror deleted!');
	
	
	print('Restoring MagicMirror...');
	exec('cp -a Desktop/.imessedup/backup/MagicMirror ./');
	log('MagicMirror restored!');
	
	print('Installing Dependencies MagicMirror...');
	exec('cd MagicMirror && npm install');
	log('MagicMirror dependencies installed!');
	
	print('You are all set!');
	log('NOTE: if after a restart, it still does not boot after a few minutes, then you will need to do a hard reset.');
}

// Runs program, but asks the user if they would like to continue...
yesno.ask(chalk.red.bold('Hold up! This will delete your current installation of magic mirror. [yes/no]\n>'), true, (ok) => {
	if (ok) {
		run();
	} else {
		log('Ok, no biggie');
	}
});
