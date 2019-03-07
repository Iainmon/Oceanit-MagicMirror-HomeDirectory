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
	log('MagicMirror deleted!');
	
	exec('echo 1');
	
	print('Deleting MagicMirror...');
	log('MagicMirror deleted!');
	
	print('Deleting MagicMirror...');
	log('MagicMirror deleted!');
	
	print('Deleting MagicMirror...');
	log('MagicMirror deleted!');
}

// Runs program, but asks the user if they would like to continue...
yesno.ask(chalk.red.bold('Hold up! This will delete your current installation of magic mirror. [yes/no]\n>'), true, (ok) => {
	if (ok) {
		run();
	} else {
		log('Ok, no biggie');
	}
});
