import { useRef, useState } from 'react';
import styles from './Encrypt.module.scss';
const Encrypt = () => {
	const form = useRef<HTMLFormElement>(null);
	const [encryptType, setEncryptType] = useState('encrypt');
	return (
		<div>
			<h1 className={styles.title}>ChaCypher</h1>
			<form className={styles.form} ref={form}>
				<div className={styles.input_radio}>
					<label
						htmlFor='Encrypt-id'
						className={styles.input_radio_label}>
						Encrypt
					</label>
					<input
						type='radio'
						name='encryptType'
						id='Encrypt-id'
						className={styles.input_radio_input}
						defaultChecked
						checked={encryptType === 'encrypt'}
						onChange={() => setEncryptType('encrypt')}
					/>
					<label htmlFor='Decrypt-id' className={styles.input_label}>
						Decrypt
					</label>
					<input
						type='radio'
						name='encryptType'
						id='Decrypt-id'
						className={styles.input_radio_input}
						checked={encryptType === 'decrypt'}
						onChange={() => setEncryptType('decrypt')}
					/>
				</div>
				<div className={styles.input}>
					<label htmlFor='key' className={styles.input_label}>
						Key
					</label>
					<input
						type='text'
						name='key'
						id='key'
						className={styles.input_input}
					/>
				</div>
				<div className={styles.input}>
					<label htmlFor='encrypt' className={styles.input_label}>
						Text
					</label>
					<textarea
						name='encrypt'
						id='encrypt'
						className={styles.input_input}></textarea>
				</div>
				<div className={styles.result}>
					<label className={styles.result_label}>Result</label>
					<div className={styles.result_content}>
						este es el espacio para el resultado
					</div>
				</div>
				<button className={styles.button}>{encryptType}</button>
			</form>
		</div>
	);
};

export default Encrypt;
