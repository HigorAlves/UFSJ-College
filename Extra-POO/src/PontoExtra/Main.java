package PontoExtra;

import java.awt.EventQueue;

import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.border.EmptyBorder;
import java.awt.FlowLayout;
import java.util.LinkedList;
import java.util.List;

import javax.swing.ButtonGroup;
import javax.swing.DefaultComboBoxModel;

@SuppressWarnings("serial")
public class Main extends JFrame {

	private JPanel contentPane;
	
	private JLabel id;
	private JLabel nome;
	private JLabel sobrenome;
	private JLabel idade;
	private JLabel telefone;
	private JLabel sexo;
	private JLabel maiorIdade;
	
	private JTextField txtId;
	private JTextField txtNome;
	private JTextField txtSobrenome;
	private JTextField txtIdade;
	private JTextField txtTelefone;
	
	private JButton btSalvar;
	
	@SuppressWarnings("rawtypes")
	private JComboBox comboBox;
	private JCheckBox boxMasculino;
	private JCheckBox boxFeminino;
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	private void createGui() {
		id = new JLabel("ID:");
		nome = new JLabel("Nome:");
		sobrenome = new JLabel("Sobrenome:");
		idade = new JLabel("Idade:");
		telefone = new JLabel("Telefone:");
		sexo = new JLabel("Sexo:");
		maiorIdade = new JLabel("Maior de Idade?");
		
		txtId = new JTextField();
		txtId.setColumns(4);
		txtNome = new JTextField();
		txtNome.setColumns(10);
		txtSobrenome = new JTextField();
		txtSobrenome.setColumns(10);
		txtIdade = new JTextField();
		txtIdade.setColumns(4);
		txtTelefone = new JTextField();
		txtTelefone.setColumns(10);
		
		btSalvar = new JButton("Salvar");
		
		comboBox = new JComboBox<>();
		comboBox.setModel(new DefaultComboBoxModel(new String[] {"Sim", "Não"}));
		
		boxMasculino = new JCheckBox("Masculino");
		boxFeminino = new JCheckBox("Feminino");
		
		contentPane.add(id);
		contentPane.add(txtId);
		contentPane.add(nome);
		contentPane.add(txtNome);
		contentPane.add(sobrenome);
		contentPane.add(txtSobrenome);
		contentPane.add(idade);
		contentPane.add(txtIdade);
		contentPane.add(telefone);
		contentPane.add(txtTelefone);
		contentPane.add(maiorIdade);
		contentPane.add(comboBox);
		contentPane.add(sexo);
		contentPane.add(boxMasculino);
		contentPane.add(boxFeminino);
		contentPane.add(btSalvar);
	}
	
	private void oneCheck() {
		ButtonGroup group = new ButtonGroup();
		group.add(boxMasculino);
		group.add(boxFeminino);
	}
	
	/**
	 * Cria a interface
	 */
	public Main() {
		super("Ponto Extra");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setSize(650,150);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		contentPane.setLayout(new FlowLayout(FlowLayout.CENTER, 5, 5));
		setContentPane(contentPane);
		
		List<Pessoa> pessoas = new LinkedList<>();
		Actions action = new Actions();
		
		createGui();
		oneCheck();
		action.btSave(pessoas, btSalvar, txtId, txtNome, txtSobrenome, txtIdade, txtTelefone, comboBox, boxMasculino);
	}
	
	/**
	 * Abrir interface Grafica.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Main frame = new Main();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

}
