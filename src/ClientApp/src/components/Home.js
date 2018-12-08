import React, { Component } from 'react';
import { Col, Grid, Panel, Row } from 'react-bootstrap';
import './Home.css'
import { CovenantList } from './CovenantList';

export class Home extends Component {
  displayName = Home.name

  handleSelect(event) {
    console.log(event);
  }

  render() {
    return (
        <Grid fluid className={'content-container'}>
            <Row>
                <Col sm={8}>
                    <Panel>
                        <Panel.Heading>
                            <Row>
                                <Col sm={6}>
                                    Document
                                </Col>
                                <Col sm={6}>
                                    <div className="file-upload-container">
                                        <label className="file-upload btn btn-primary">
                                            Upload <input type="file" onChange={this.handleSelect}/>
                                        </label>
                                    </div>
                                </Col>
                            </Row>
                        </Panel.Heading>
                        <Panel.Body>
                            1.1. <mark className={'highlight'}>Подрядчик обязуется в сроки</mark> с "__" _________ 20__ г. по "__" _________ 20__ г. выполнять своими силами и средствами работы (оказывать услуги) по техническому обслуживанию и ремонту оборудования, в соответствии с утвержденным сторонами перечнем работ, указаниями Заказчика и с обычно предъявляемыми техническими требованиями и указаниями производителя оборудования.
                            1.2. Перечень выполняемых работ утверждается сторонами путем подписания Протокола согласования не позднее ____ календарных дней до начала выполнения работ.
                            В Протоколе в обязательном порядке указываются:
                            - наименование выполняемых работ;
                            - стоимость выполняемых работ;
                            - перечень материалов предоставляемых Заказчиком (в случае их предоставления);
                            - срок предоставления Заказчиком фронта работ и материалов для выполнения работ (в случае их предоставления);
                            - <mark className={'highlight'}>сроки выполнения работ (этапа работ);</mark>
                            - размеры и сроки авансовых платежей (при их наличии);
                            - другие условия, которые по мнению сторон являются существенными для выполнения работ.
                            1.3. Сроки выполнения работ могут быть изменены:
                            - соглашением сторон, при наличии объективных обстоятельств. Препятствующих своевременному выполнению работ;
                            - по инициативе Подрядчика в случае просрочки Заказчика по оплате работ, предоставлению материалов, фронта работ или устранению иных препятствий, влияющих на срок выполнения работ, соразмерно сроку просрочки.

                            2. ОБЯЗАННОСТИ И ПРАВА ЗАКАЗЧИКА
                            2.1. Заказчик  обязуется обеспечить Подрядчику фронт работ, создать необходимые условия для выполнения работ, а по окончании работ принять их результаты и произвести окончательные расчеты в течение 3 (трех) банковских дней от  даты подписания акта сдачи-приемки выполненных работ.
                            2.2. Заказчик вправе в любое время до сдачи ему результата работ отказаться от настоящего договора, уплатив Подрядчику, часть установленной цены пропорционально части работы, выполненной до уведомления об отказе Заказчика от договора, и возместив Подрядчику расходы, произведенные до этого момента с целью исполнения договора.
                            В этом случае, если иное не будет установлено Сторонами, материалы, оплаченные Заказчиком, переходят в собственность Заказчика.
                            2.3. Заказчик вправе отказаться от договора и потребовать возмещения убытков, если во время выполнения работ станет очевидным, что работа не будет выполнена надлежащим образом, а Подрядчик не выполняет требования Заказчика об устранении недостатков в назначенный им соразмерный срок.
                            2.4. В случае расторжения  договора Заказчик вправе требовать передачи ему результата незавершенной работы с компенсацией Подрядчику произведенных затрат. Расчеты между Подрядчиком и Заказчиком производятся не позднее,  чем через 3 дня после расторжения договора.

                            3. ПРАВА И ОБЯЗАННОСТИ ПОДРЯДЧИКА
                            3.1. Подрядчик вправе отказаться от договора, предупредив об этом Заказчика, или увеличить сроки исполнения работ по настоящему договору, установленные п.1.1, в следующих случаях:
                            - Заказчик не обеспечил фронта работ в установленные договором сроки;
                            - Заказчик, несмотря на своевременное и обоснованное предупреждение со стороны Подрядчика о возможных неблагоприятных для Заказчика и (или) Подрядчика последствиях в случае выполнения его указаний о способе исполнения работы,  в разумный срок не изменит указаний о способе выполнения работы либо не устранит иных  обстоятельств, грозящих прочности или годности работы;
                            - Заказчик не исполняет обязательства по оплате проводимых работ;
                            - выполнение работ связано с нарушением  требований  техники безопасности.
                            - выполнение работ связано с нарушением обычно предъявляемых технических требований или указаний производителя, содержащихся в сопроводительной документации.
                            3.2. При обнаружении в ходе выполнения работы:
                            - необходимости проведения дополнительных работ;
                            - необходимости использования запасных частей или комплектующих, стоимость которых или срок доставки выходят за рамки настоящего договора,
                            что влечет за собою увеличение стоимости или срока выполнения работы, Подрядчик сообщает об этом Заказчику.
                            Заказчик обязан в срок не позднее 3 (Трех) дней ответить на уведомление Подрядчика. При неполучении от Заказчика ответа на указанное сообщение в течение 3 (Трех) дней, Подрядчик обязан приостановить работы с отнесением убытков, вызванных простоем, на счет Заказчика.
                            При согласии Заказчика на изменение стоимости или сроков выполнения работ составляется дополнительное соглашение к настоящему договору с указанием изменений.
                            В случае отказа Заказчика от изменения стоимости или сроков выполнения работ Подрядчик выполняет работы, оговоренные настоящим договором в том объеме, в котором это возможно и передает выполненную часть работ Заказчику  в порядке установленном настоящим договором.
                            3.3.По окончании работ Подрядчик сообщает Заказчику о готовности к сдаче результата выполненных работ и направляет заказчику Акт выполненных работ (оказанных услуг). Заказчик в течение 3 дней после получения указанного сообщения приступает к приемке работ.
                            3.4. Сдача результата работ Подрядчиком и приемка его Заказчиком оформляются актом приемки работ, подписанным обеими сторонами.
                            Заказчик в течение 3-х дней со дня получения акта сдачи-приемки и отчетных документов, обязан вернуть Подрядчику подписанный акт сдачи-приемки выполненных работ (оказанных услуг) или мотивированный письменный отказ от их приемки.
                            В случае мотивированного отказа Заказчика от приемки результатов работы сторонами составляется двусторонний акт с перечнем необходимых доработок и их сроков.
                            В случае, если в течение 3-х дней Заказчик не представляет Подрядчику подписанного акта сдачи-приемки (мотивированных письменных возражений), работы считаются принятыми Заказчиком в объеме, указанном в акте сдачи-приемки и подлежащими оплате.
                            3.5. Подрядчик обязуется за свой счет устранить недостатки выполненных работ.
                            Наличие дефектов, выявленных при приемке выполненных работ, устанавливается двусторонним актом  Заказчика и Подрядчика с указанием сроков их устранения.
                            Подрядчик обязуется по требованию Заказчика выслать своего представителя для составления акта.
                            3.6. Подрядчик предоставляет Заказчику гарантию на качество выполненных работ.
                            Предоставление Подрядчиком гарантии на выполненные работы не предусматривает регулярное техническое обслуживание.
                            3.7. Гарантия Подрядчика не распространяется на:
                            - запасные части, комплектующие, материалы, предоставленные для выполнения работ Заказчиком;
                            - стеклянные элементы, осветительные приборы, используемые в оборудовании;
                            3.8. Гарантийный ремонт не производится:
                            - наличия механических, тепловых или иных повреждений оборудования, свидетельствующих о нарушениях правил эксплуатации, транспортировки, хранения или обращения с оборудованием.
                            - попадания внутрь оборудования посторонних предметов, насекомых, жидкостей. При этом к посторонним предметам относиться, в том числе использование смазочных материалов марки отличной от рекомендованной к использованию производителем или подрядчиком.
                            - самостоятельный ремонт, внесение конструктивных изменений, использование самодельных или не отвечающих техническим требованиям производителя материалов (запасных частей);
                            - использование оборудования не по прямому назначению.
                            - дефекты, возникшие в результате отклонений от государственных технических стандартов питающих сетей.

                            4. ОТВЕТСТВЕННОСТЬ СТОРОН
                            4.1. За нарушение сроков выполнения работ Подрядчик  выплачивает Заказчику  неустойку в размере 0,15 %  от общей стоимости работ за каждый день просрочки.
                            4.2. При не обеспечении Заказчиком фронта работ в установленные договором сроки Заказчик уплачивает Подрядчику штраф в размере 0,15 % от общей стоимости работ за каждый день просрочки и возмещает причиненные этим убытки.
                            4.3. За задержку начала приемки законченных работ свыше 3 дней со дня получения извещения подрядчика Заказчик уплачивает  неустойку в размере  0,15 % от общей стоимости  работ за каждый день просрочки, но не более 10% от общей стоимости работ.
                            4.4. В случае несвоевременной оплаты принятых работ Заказчик уплачивает Подрядчику неустойку в размере 0,15 % от суммы просроченного платежа, за каждый день просрочки.

                            5. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ
                            5.1. Споры по настоящему  договору рассматриваются в порядке, установленном законодательством.
                            5.2. Договор  составляется  в  двух экземплярах,  из которых один остается у Подрядчика, а один - у Заказчика.

                        </Panel.Body>
                    </Panel>
                </Col>
                <Col sm={4}>
                    <CovenantList/>
                </Col>
            </Row>
        </Grid>
    );
  }
}
