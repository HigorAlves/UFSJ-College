package View;

import Controller.ArqEscritor;
import Controller.ClienteController;
import Model.Cliente;
import Model.TableModelCliente;
import java.awt.FileDialog;
import java.io.File;
import java.util.ConcurrentModificationException;
import javax.swing.JFileChooser;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.filechooser.FileNameExtensionFilter;
import miscellaneous.Database;
import miscellaneous.FabricaAbstrata;
import java.lang.NumberFormatException;

/**
 *
 * @author Higor Alves
 */
public class ClienteView extends javax.swing.JInternalFrame implements View {
    private static ClienteView instancia = new ClienteView();
    private TableModelCliente tableModel = new TableModelCliente(Database.getInstancia().getClientes());
    private ClienteController controller = (ClienteController) FabricaAbstrata.getFabrica("Cliente").criarControle();

    /**
     * Creates new form FuncionarioView
     */
    private ClienteView() {
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jlNome = new javax.swing.JLabel();
        tfNome = new javax.swing.JTextField();
        jlIdade = new javax.swing.JLabel();
        tfIdade = new javax.swing.JTextField();
        jbSalvar = new javax.swing.JButton();
        jbEditar = new javax.swing.JButton();
        jbDeletar = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        TableCliente = new javax.swing.JTable();
        jMenuBar1 = new javax.swing.JMenuBar();
        jMenu1 = new javax.swing.JMenu();
        jMenuItem1 = new javax.swing.JMenuItem();
        jMenuItem2 = new javax.swing.JMenuItem();

        setClosable(true);
        setTitle("Cliente");
        setMaximumSize(new java.awt.Dimension(520, 415));
        setMinimumSize(new java.awt.Dimension(520, 415));
        setPreferredSize(new java.awt.Dimension(520, 415));
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jlNome.setText("Nome:");

        jlIdade.setText("Idade:");

        jbSalvar.setText("Salvar");
        jbSalvar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jbSalvarActionPerformed(evt);
            }
        });

        jbEditar.setText("Editar");
        jbEditar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jbEditarActionPerformed(evt);
            }
        });

        jbDeletar.setText("Deletar");
        jbDeletar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jbDeletarActionPerformed(evt);
            }
        });

        TableCliente.setAutoCreateRowSorter(true);
        TableCliente.setModel(tableModel);
        jScrollPane1.setViewportView(TableCliente);
        if (TableCliente.getColumnModel().getColumnCount() > 0) {
            TableCliente.getColumnModel().getColumn(0).setHeaderValue("ID");
            TableCliente.getColumnModel().getColumn(1).setHeaderValue("Nome");
            TableCliente.getColumnModel().getColumn(2).setHeaderValue("Idade");
        }

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 490, Short.MAX_VALUE)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(jlNome)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(tfNome, javax.swing.GroupLayout.PREFERRED_SIZE, 125, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(jlIdade, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(tfIdade, javax.swing.GroupLayout.PREFERRED_SIZE, 49, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(18, 18, 18)
                        .addComponent(jbSalvar)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jbEditar)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jbDeletar)
                        .addGap(12, 12, 12)))
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jbEditar, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(jbDeletar, javax.swing.GroupLayout.PREFERRED_SIZE, 23, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                        .addComponent(tfIdade)
                        .addComponent(jlIdade, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(tfNome)
                        .addComponent(jlNome, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(jbSalvar, javax.swing.GroupLayout.PREFERRED_SIZE, 23, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 312, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(33, 33, 33))
        );

        getContentPane().add(jPanel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 510, 390));

        jMenu1.setText("File");

        jMenuItem1.setText("Salvar");
        jMenuItem1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jMenuItem1ActionPerformed(evt);
            }
        });
        jMenu1.add(jMenuItem1);

        jMenuItem2.setText("Abrir");
        jMenuItem2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jMenuItem2ActionPerformed(evt);
            }
        });
        jMenu1.add(jMenuItem2);

        jMenuBar1.add(jMenu1);

        setJMenuBar(jMenuBar1);

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jbSalvarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jbSalvarActionPerformed
        try{
            if(controller.addRow(tfNome.getText(), Integer.parseInt(tfIdade.getText()))){
                tableModel.updateTable();
                tfIdade.setText("");
                tfNome.setText("");
                popUpSucesso(jPanel1, "Cliente Cadastrado com sucesso!");
            }else{
                popUpError(jPanel1, "Não foi possivel Cadastrar", "Cliente ja existe ou falta preencher algum campo");
            }
        }catch(NumberFormatException e){
            popUpError(jPanel1, "Error", "Idade não pode ser letra!");
        }
    }//GEN-LAST:event_jbSalvarActionPerformed

    private void jbDeletarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jbDeletarActionPerformed
        try{
            int id = (int) tableModel.getValueAt(TableCliente.getSelectedRow(), 0);
            if (controller.removerRow(id)){
                tableModel.updateTable();
                popUpSucesso(jPanel1, "Cliente deletado com sucesso!");
            }
        }catch (IndexOutOfBoundsException e){
            popUpError(jPanel1, "Não foi possivel deletar", "Verifique se você selecionou algum cliente!");
        }
    }//GEN-LAST:event_jbDeletarActionPerformed

    private void jbEditarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jbEditarActionPerformed
        try{
            if (TableCliente.getSelectedRow() != -1){
                int id = (int)tableModel.getValueAt(TableCliente.getSelectedRow(), 0);
                String nome = (String) tableModel.getValueAt(TableCliente.getSelectedRow(), 1);
                int idade = (int) tableModel.getValueAt(TableCliente.getSelectedRow(), 2);
                
                if(controller.alterarRow(id, nome, idade, tfNome.getText(), Integer.parseInt(tfIdade.getText()))){
                    popUpSucesso(jPanel1, "Cliente alterado com sucesso.");
                    tfIdade.setText("");
                    tfNome.setText("");
                    tableModel.updateTable();
                }
                
            }
        }catch (NumberFormatException e){
            
        }
    }//GEN-LAST:event_jbEditarActionPerformed

    private void jMenuItem1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jMenuItem1ActionPerformed
        
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setDialogTitle("Onde você deseja salvar?");   
        FileNameExtensionFilter filter = new FileNameExtensionFilter("csv", "csv");
        fileChooser.setFileFilter(filter);
        int userSelection = fileChooser.showSaveDialog(jPanel1);
 
        if (userSelection == JFileChooser.APPROVE_OPTION) {
            File fileToSave = fileChooser.getSelectedFile();
            controller.salvarArq(fileToSave.getAbsolutePath());
        }
    }//GEN-LAST:event_jMenuItem1ActionPerformed

    private void jMenuItem2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jMenuItem2ActionPerformed
        try{
            String path = null;
            JFileChooser filechooser = new JFileChooser();
            filechooser.setDialogTitle("Procurar base de dados do cliente");
            filechooser.setFileSelectionMode(JFileChooser.FILES_ONLY);
            FileNameExtensionFilter filter = new FileNameExtensionFilter("csv", "csv");
            filechooser.setFileFilter(filter);
            int retorno = filechooser.showOpenDialog(this);

            if(retorno == JFileChooser.APPROVE_OPTION){
                File file = filechooser.getSelectedFile();
                path = file.getAbsolutePath();
            }
            controller.abrirArq(path);
            tableModel.updateTable();
        }catch(NullPointerException e){
            
        }
    }//GEN-LAST:event_jMenuItem2ActionPerformed

    //POPUPS PARA MANDAR MENSAGENS DE ERROR OU SUCESSO
    private void popUpSucesso(JPanel pane, String mensagem){
        JOptionPane.showMessageDialog(pane,mensagem, "Sucesso", JOptionPane.INFORMATION_MESSAGE);
    }
    private void popUpError(JPanel pane, String titulo, String mensagem){
        JOptionPane.showMessageDialog(pane, mensagem, titulo, JOptionPane.ERROR_MESSAGE);
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JTable TableCliente;
    private javax.swing.JMenu jMenu1;
    private javax.swing.JMenuBar jMenuBar1;
    private javax.swing.JMenuItem jMenuItem1;
    private javax.swing.JMenuItem jMenuItem2;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JButton jbDeletar;
    private javax.swing.JButton jbEditar;
    private javax.swing.JButton jbSalvar;
    private javax.swing.JLabel jlIdade;
    private javax.swing.JLabel jlNome;
    private javax.swing.JTextField tfIdade;
    private javax.swing.JTextField tfNome;
    // End of variables declaration//GEN-END:variables
    
    public static ClienteView getInstancia(){
        return instancia;
    }
}
