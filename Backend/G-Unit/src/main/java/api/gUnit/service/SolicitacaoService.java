package api.gUnit.service;

import api.gUnit.domain.Solicitacao;
import api.gUnit.repostory.SolicitacaoRepository;
import org.springframework.stereotype.Service;

@Service
public class SolicitacaoService implements ISolicitacaoService {

    private final SolicitacaoRepository solicitacaoRepository;

    public SolicitacaoService(SolicitacaoRepository solicitacaoRepository) {
        this.solicitacaoRepository = solicitacaoRepository;
    }

    @Override
    public Solicitacao create(Solicitacao solicitacao) {
        return solicitacaoRepository.save(solicitacao);
    }

    @Override
    public Solicitacao buscar(Long id) {
        return solicitacaoRepository.getById(id);
    }

    @Override
    public Solicitacao update(Solicitacao solicitacao) {
        Solicitacao solicataoEntity = solicitacaoRepository.getById(solicitacao.getId());
        solicataoEntity.setEvento(solicitacao.getEvento());
        solicataoEntity.setSolicitante(solicitacao.getSolicitante());
        return solicitacaoRepository.save(solicataoEntity);
    }
}

