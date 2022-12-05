package api.gUnit.service;

import api.gUnit.domain.Solicitacao;

public interface ISolicitacaoService {

    Solicitacao create(Solicitacao solicitacao);

    Solicitacao buscar(Long id);

    Solicitacao update(Solicitacao solicitacao);
}
