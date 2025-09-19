class Notificacao {
    constructor(destinatario, mensagem) {
        this.destinatario = destinatario;
        this.mensagem = mensagem;
    }

    enviar() {
        throw new Error("Método enviar() deve ser implementado na subclasse.");
    }
}

class Email extends Notificacao {
    constructor(destinatario, mensagem, assunto) {
        super(destinatario, mensagem);
        this.assunto = assunto;
    }

    enviar() {
        return `Enviando email para ${this.destinatario} com assunto "${this.assunto}" e mensagem: ${this.mensagem}`;
    }
}

class SMS extends Notificacao {
    constructor(destinatario, mensagem, numeroTelefone) {
        super(destinatario, mensagem);
        this.numeroTelefone = numeroTelefone;
    }
    
    enviar() {
        return `Enviando SMS para ${this.numeroTelefone} (${this.destinatario}): ${this.mensagem}`;
    }
}

class PushNotification extends Notificacao {
    constructor(destinatario, mensagem, dispositivo) {
        super(destinatario, mensagem);
        this.dispositivo = dispositivo;
    }

    enviar() {
        return `Enviando notificação push para ${this.dispositivo} (${this.destinatario}): ${this.mensagem}`;
    }
}

class NotificationFactory {
    static criarNotificacao(tipo, destinatario, mensagem, infoExtra) {
        switch(tipo) {
            case 'email':
                return new Email(destinatario, mensagem, infoExtra);
            case 'sms':
                return new SMS(destinatario, mensagem, infoExtra);
            case 'push':
                return new PushNotification(destinatario, mensagem, infoExtra);
            default:
                throw new Error("Tipo de notificação inválido.");
        }
    }
}

// Testando
const notificacoes = [
    NotificationFactory.criarNotificacao('email', 'joao@email.com', 'Olá João!', 'Assunto Importante'),
    NotificationFactory.criarNotificacao('sms', 'Maria Silva', 'SMS urgente!', '+5511999999999'),
    NotificationFactory.criarNotificacao('push', 'Carlos', 'Nova mensagem', 'iPhone-123')
];

notificacoes.forEach(notificacao => {
    console.log(notificacao.enviar());
});