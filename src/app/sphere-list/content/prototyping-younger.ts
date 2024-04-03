import { Sphere } from '../interface/sphere'

export const PROTOTYPING_YOUNGER: Sphere = {
  name: 'prototyping-younger',
  viewName: 'Прототипирование 8 класс',
  description:
    'Прототипирование – это инженерно-конструкторская работа, связанная с созданием прототипов (опытных образцов) для последующих исследований, тестирования и прочих проверок. В процессе работы с прототипом становится возможной отработка и устранение всех возможных несоответствий и неисправностей, а также доработка конструкторских решений.',
  content: /*html*/ `
        <ol>
            <li>ОБЩИЕ ПОЛОЖЕНИЯ</li>
        </ol>
        <p>Прототипирование &ndash; это инженерно-конструкторская работа, связанная с созданием прототипов (опытных образцов)
            для последующих исследований, тестирования и прочих проверок. В процессе работы с прототипом становится возможной
            отработка и устранение всех возможных несоответствий и неисправностей, а также доработка конструкторских решений.
        </p>
        <ol start="2">
            <li>О СОРЕВНОВАНИИ</li>
        </ol>
        <p>Конкурс состоит из двух конкурсных заданий по проектированию отдельных деталей гипоидного редуктора, их распечатки и
            сборки готового изделия.</p>
        <ol start="3">
            <li>ТРЕБОВАНИЯ К УЧАСТНИКАМ</li>
        </ol>
        <p>Участник привозит самостоятельно:</p>
        <ul>
            <li>ноутбук с установленным программным обеспечением для 3D моделирования;</li>
            <li>набор инструментов для пост-обработки деталей;</li>
            <li>3D-принтер</li>
        </ul>
        <p>Организаторы конкурса предоставляют недостающие детали для физической сборки конечного устройства.</p>
        <p>В первый конкурсный день участник знакомится с предложенным заданием, создает 3D-модель в соответствии с заданием №1,
            во второй день &ndash; распечатывает ее и собирает в соответствии с заданием №2.</p>
        <p>В качестве примерного образца для проектирования предлагается гипоидный редуктор.</p>
        <p>Внешний вид примерного проектируемого устройства (рисунок 1):</p>
        <figure class="figure figure--center">
          <img src="../../../assets/sphere/p-6.png" alt="">
          <figcaption>
            <p>
              <em>Рисунок 1 &ndash; Пример проектируемого устройства</em>
            </p>
          </figcaption>
        </figure>
        <ol start="4">
            <li>КОНКУРСНОЕ ЗАДАНИЕ №1</li>
        </ol>
        <p>Участнику необходимо спроектировать детали гипоидного редуктора.</p>
        <p>Для выполнения задания участнику необходимо:</p>
        <ul>
            <li>выполнить замеры и нарисовать на бумаге эскизы с указаниями размеров (в количестве достаточном для
                воспроизведения деталей в CAD-редакторе);</li>
            <li>создать 3D-модели деталей в соответствии с требованиями задания.</li>
        </ul>
        <ol start="5">
            <li>КОНКУРСНОЕ ЗАДАНИЕ №2</li>
        </ol>
        <p>Участнику необходимо создать физический прототип гиперболоидной шестерни.</p>
        <p>Для выполнения задания участнику необходимо:</p>
        <ul>
            <li>осуществить экспорт 3D-модели в формат stl;</li>
            <li>настроить 3D-принтер (калибровка, разогрев);</li>
            <li>настроить параметры печати;</li>
            <li>распечатать детали (верхняя и нижняя полки);</li>
            <li>выполнить пост-обработку деталей;</li>
            <li>собрать устройство, опираясь на иллюстрацию (рисунок 1).</li>
        </ul>
        <p>В том случае, если по техническим причинам участники не смогли изготовить к моменту сборки необходимые детали,
            организаторы вправе предоставить им недостающие детали.</p>
        <p>Создание 3D-модели детали допускается в одной из перечисленных программ: TinkerCad, Autodesk Fusion 360, Blender,
            SketchUp Free, FreeCAD, Autodesk 3DsMax, АСКОН Компас 3D, Autodesk Inventor и др.</p>
        <p>Задание считается полностью выполненным, если участник может предоставить:</p>
        <ul>
            <li>изготовленные на 3D-принтере детали, отвечающие требованиям конкурсного задания;</li>
            <li>разработанную в процессе проектирования техническую документацию (эскизы на бумаге, файлы 3D-моделей);</li>
            <li>задания для печати (G-code).</li>
        </ul>
        <p>Показатели и критерии оценок конкурсного задания №1</p>
        <table>
            <tbody>
                <tr>
                    <td>
                        <p>Максимальное количество баллов</p>
                    </td>
                    <td>
                        <p>100</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Из них:</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>эскизы, дающие представление о конечном виде изделия, выполненные на бумаге</p>
                    </td>
                    <td>
                        <p>10</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>размеры на эскизах соответствуют заданию</p>
                    </td>
                    <td>
                        <p>15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>эскизы построены в достаточном количестве для воспроизведения деталей в CAD-редакторе</p>
                    </td>
                    <td>
                        <p>15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>3D-модель разработана</p>
                    </td>
                    <td>
                        <p>30</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>размеры 3D-модели соответствуют размерам на эскизе</p>
                    </td>
                    <td>
                        <p>30</p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p>Показатели и критерии оценок конкурсного задания №2</p>
        <table>
            <tbody>
                <tr>
                    <td>
                        <p>Максимальное количество баллов</p>
                    </td>
                    <td>
                        <p>100</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Из них:</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>участниками предоставлен STL-файлы изделия</p>
                    </td>
                    <td>
                        <p>15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>настройка параметров печати</p>
                    </td>
                    <td>
                        <p>15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>настройка 3D-принтера</p>
                    </td>
                    <td>
                        <p>15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>детали распечатаны</p>
                    </td>
                    <td>
                        <p>30</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>выполнена пост-обработка деталей</p>
                    </td>
                    <td>
                        <p>15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>аккуратность работы</p>
                    </td>
                    <td>
                        <p>10</p>
                    </td>
                </tr>
            </tbody>
        </table>
        <ol start="5">
            <li>ПОРЯДОК ПРОВЕДЕНИЯ СОРЕВНОВАНИЙ</li>
        </ol>
        <p>Во время проведения конкурса участник должен знать и строго соблюдать правила безопасного поведения учащихся на
            конкурсной площадке</p>
        <p>За грубые нарушения правила безопасного поведения учащихся, которые привели к порче оборудования, инструмента, травме или созданию аварийной ситуации, участник отстраняется от дальнейшего участия в конкурсе. Решение об отстранении принимает главный судья.</p>
        <ol start="6">
            <li>ПРАВИЛА ОПРЕДЕЛЕНИЯ ПОБЕДИТЕЛЯ</li>
        </ol>
        <p>Участник, набравший наибольшее количество баллов за выполнение двух конкурсных заданий, считается победителем.</p>
        <p>В случае набора участниками одинакового количества баллов, победителем конкурса считается участник, набравший
            наибольшее количество баллов и выполнивший конкурсные задания за наименьшее время.</p>
        <p>В случае разногласий окончательное решение оценки конкурса принимает главный судья.</p>
    `,
}
