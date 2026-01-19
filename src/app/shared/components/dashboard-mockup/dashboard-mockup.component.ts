import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-mockup',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-mockup">
      <!-- Header Bar -->
      <div class="dashboard-header">
        <div class="header-left">
          <div class="nav-items">
            <div class="nav-item active"></div>
            <div class="nav-item"></div>
            <div class="nav-item"></div>
          </div>
        </div>
        <div class="header-right">
          <div class="search-bar"></div>
          <div class="avatar"></div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="dashboard-content">
        <!-- Sidebar -->
        <div class="sidebar">
          <div class="sidebar-item active">
            <div class="sidebar-icon"></div>
            <div class="sidebar-text"></div>
          </div>
          <div class="sidebar-item">
            <div class="sidebar-icon"></div>
            <div class="sidebar-text"></div>
          </div>
          <div class="sidebar-item">
            <div class="sidebar-icon"></div>
            <div class="sidebar-text"></div>
          </div>
          <div class="sidebar-item">
            <div class="sidebar-icon"></div>
            <div class="sidebar-text"></div>
          </div>
          <div class="sidebar-item">
            <div class="sidebar-icon"></div>
            <div class="sidebar-text"></div>
          </div>
        </div>

        <!-- Main Panel -->
        <div class="main-panel">
          <!-- Stats Row -->
          <div class="stats-row">
            <div class="stat-card">
              <div class="stat-icon green"></div>
              <div class="stat-info">
                <div class="stat-value"></div>
                <div class="stat-label"></div>
              </div>
              <div class="stat-trend up">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon blue"></div>
              <div class="stat-info">
                <div class="stat-value"></div>
                <div class="stat-label"></div>
              </div>
              <div class="stat-trend up">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon purple"></div>
              <div class="stat-info">
                <div class="stat-value"></div>
                <div class="stat-label"></div>
              </div>
              <div class="stat-trend down">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                  <polyline points="17 18 23 18 23 12"></polyline>
                </svg>
              </div>
            </div>
          </div>

          <!-- Charts Row -->
          <div class="charts-row">
            <!-- Line Chart -->
            <div class="chart-card large">
              <div class="chart-header">
                <div class="chart-title"></div>
                <div class="chart-legend">
                  <div class="legend-item green"></div>
                  <div class="legend-item blue"></div>
                </div>
              </div>
              <div class="line-chart">
                <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                  <!-- Grid lines -->
                  <line x1="0" y1="25" x2="300" y2="25" class="grid-line" />
                  <line x1="0" y1="50" x2="300" y2="50" class="grid-line" />
                  <line x1="0" y1="75" x2="300" y2="75" class="grid-line" />

                  <!-- Area fill -->
                  <path
                    d="M0,80 Q30,70 60,65 T120,45 T180,55 T240,30 T300,40 L300,100 L0,100 Z"
                    class="area-fill green"
                  />
                  <path
                    d="M0,90 Q30,85 60,80 T120,70 T180,75 T240,55 T300,60 L300,100 L0,100 Z"
                    class="area-fill blue"
                  />

                  <!-- Lines -->
                  <path
                    d="M0,80 Q30,70 60,65 T120,45 T180,55 T240,30 T300,40"
                    class="chart-line green"
                  />
                  <path
                    d="M0,90 Q30,85 60,80 T120,70 T180,75 T240,55 T300,60"
                    class="chart-line blue"
                  />

                  <!-- Dots -->
                  <circle cx="60" cy="65" r="4" class="chart-dot green" />
                  <circle cx="120" cy="45" r="4" class="chart-dot green" />
                  <circle cx="180" cy="55" r="4" class="chart-dot green" />
                  <circle cx="240" cy="30" r="4" class="chart-dot green" />
                </svg>
              </div>
              <div class="chart-labels">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span
                ><span>Jun</span>
              </div>
            </div>

            <!-- Donut Chart -->
            <div class="chart-card">
              <div class="chart-header">
                <div class="chart-title"></div>
              </div>
              <div class="donut-chart">
                <svg viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    class="donut-segment"
                    stroke-dasharray="110 110"
                    stroke-dashoffset="0"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    class="donut-segment blue"
                    stroke-dasharray="66 154"
                    stroke-dashoffset="-110"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    class="donut-segment purple"
                    stroke-dasharray="44 176"
                    stroke-dashoffset="-176"
                  />
                </svg>
                <div class="donut-center">
                  <div class="donut-value">78%</div>
                </div>
              </div>
              <div class="donut-legend">
                <div class="legend-row">
                  <span class="dot green"></span><span class="label"></span>
                </div>
                <div class="legend-row">
                  <span class="dot blue"></span><span class="label"></span>
                </div>
                <div class="legend-row">
                  <span class="dot purple"></span><span class="label"></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bar Chart Row -->
          <div class="charts-row">
            <div class="chart-card">
              <div class="chart-header">
                <div class="chart-title"></div>
              </div>
              <div class="bar-chart">
                <div class="bar" style="--height: 65%"><div class="bar-fill green"></div></div>
                <div class="bar" style="--height: 85%"><div class="bar-fill green"></div></div>
                <div class="bar" style="--height: 45%"><div class="bar-fill green"></div></div>
                <div class="bar" style="--height: 95%"><div class="bar-fill green"></div></div>
                <div class="bar" style="--height: 70%"><div class="bar-fill green"></div></div>
                <div class="bar" style="--height: 55%"><div class="bar-fill green"></div></div>
                <div class="bar" style="--height: 80%"><div class="bar-fill green"></div></div>
              </div>
            </div>

            <!-- Activity List -->
            <div class="chart-card">
              <div class="chart-header">
                <div class="chart-title"></div>
              </div>
              <div class="activity-list">
                <div class="activity-item">
                  <div class="activity-dot green"></div>
                  <div class="activity-content">
                    <div class="activity-text"></div>
                    <div class="activity-time"></div>
                  </div>
                </div>
                <div class="activity-item">
                  <div class="activity-dot blue"></div>
                  <div class="activity-content">
                    <div class="activity-text"></div>
                    <div class="activity-time"></div>
                  </div>
                </div>
                <div class="activity-item">
                  <div class="activity-dot purple"></div>
                  <div class="activity-content">
                    <div class="activity-text"></div>
                    <div class="activity-time"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        max-width: 100%;
      }

      .dashboard-mockup {
        width: 100%;
        max-width: 320px;
        margin: 0 auto;
        aspect-ratio: 4 / 3;
        background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
        border-radius: 12px;
        box-shadow:
          0 15px 30px -8px rgba(0, 0, 0, 0.12),
          0 0 0 1px rgba(0, 0, 0, 0.05);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        font-size: 0.5rem;
      }

      @media (min-width: 1024px) {
        .dashboard-mockup {
          max-width: none;
          border-radius: 16px;
          box-shadow:
            0 25px 50px -12px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(0, 0, 0, 0.05);
          font-size: 0.7rem;
        }
      }

      /* Header */
      .dashboard-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 16px;
        background: linear-gradient(90deg, #0f172a 0%, #1e293b 100%);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .logo-placeholder {
        width: 28px;
        height: 28px;
        border-radius: 6px;
        background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
      }

      .nav-items {
        display: flex;
        gap: 8px;
      }

      .nav-item {
        width: 40px;
        height: 8px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.2);
      }

      .nav-item.active {
        background: rgba(16, 185, 129, 0.6);
        width: 50px;
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .search-bar {
        width: 100px;
        height: 24px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.1);
      }

      .avatar {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
      }

      /* Main Content */
      .dashboard-content {
        display: flex;
        flex: 1;
        overflow: hidden;
      }

      /* Sidebar */
      .sidebar {
        width: 56px;
        background: #f1f5f9;
        border-right: 1px solid #e2e8f0;
        padding: 10px 8px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .sidebar-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s;
      }

      .sidebar-item.active {
        background: linear-gradient(
          135deg,
          rgba(16, 185, 129, 0.15) 0%,
          rgba(6, 182, 212, 0.15) 100%
        );
      }

      .sidebar-icon {
        width: 20px;
        height: 20px;
        border-radius: 4px;
        background: #cbd5e1;
      }

      .sidebar-item.active .sidebar-icon {
        background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
      }

      .sidebar-text {
        display: none;
      }

      /* Main Panel */
      .main-panel {
        flex: 1;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        overflow: hidden;
        background: #f8fafc;
      }

      /* Stats Row */
      .stats-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }

      .stat-card {
        background: white;
        border-radius: 10px;
        padding: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        border: 1px solid #e2e8f0;
      }

      .stat-icon {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        flex-shrink: 0;
      }

      .stat-icon.green {
        background: linear-gradient(
          135deg,
          rgba(16, 185, 129, 0.2) 0%,
          rgba(6, 182, 212, 0.2) 100%
        );
      }
      .stat-icon.blue {
        background: linear-gradient(
          135deg,
          rgba(59, 130, 246, 0.2) 0%,
          rgba(99, 102, 241, 0.2) 100%
        );
      }
      .stat-icon.purple {
        background: linear-gradient(
          135deg,
          rgba(168, 85, 247, 0.2) 0%,
          rgba(236, 72, 153, 0.2) 100%
        );
      }

      .stat-info {
        flex: 1;
        min-width: 0;
      }

      .stat-value {
        height: 12px;
        width: 70%;
        background: #1e293b;
        border-radius: 3px;
        margin-bottom: 5px;
      }

      .stat-label {
        height: 8px;
        width: 50%;
        background: #cbd5e1;
        border-radius: 3px;
      }

      .stat-trend {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
      }

      .stat-trend.up {
        color: #10b981;
      }
      .stat-trend.down {
        color: #ef4444;
      }

      .stat-trend svg {
        width: 100%;
        height: 100%;
      }

      /* Charts Row */
      .charts-row {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 10px;
        flex: 1;
        min-height: 0;
      }

      .chart-card {
        background: white;
        border-radius: 10px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        border: 1px solid #e2e8f0;
        overflow: hidden;
      }

      .chart-card.large {
        grid-column: span 1;
      }

      .chart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }

      .chart-title {
        height: 10px;
        width: 70px;
        background: #1e293b;
        border-radius: 3px;
      }

      .chart-legend {
        display: flex;
        gap: 8px;
      }

      .legend-item {
        width: 24px;
        height: 8px;
        border-radius: 4px;
      }

      .legend-item.green {
        background: #10b981;
      }
      .legend-item.blue {
        background: #3b82f6;
      }

      /* Line Chart */
      .line-chart {
        flex: 1;
        min-height: 0;
      }

      .line-chart svg {
        width: 100%;
        height: 100%;
      }

      .grid-line {
        stroke: #e2e8f0;
        stroke-width: 1;
      }

      .area-fill {
        opacity: 0.15;
      }

      .area-fill.green {
        fill: #10b981;
      }
      .area-fill.blue {
        fill: #3b82f6;
      }

      .chart-line {
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
      }

      .chart-line.green {
        stroke: #10b981;
      }
      .chart-line.blue {
        stroke: #3b82f6;
      }

      .chart-dot {
        fill: white;
        stroke-width: 2;
      }

      .chart-dot.green {
        stroke: #10b981;
      }

      .chart-labels {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
        font-size: 0.6rem;
        color: #94a3b8;
      }

      /* Donut Chart */
      .donut-chart {
        position: relative;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .donut-chart svg {
        width: 80px;
        height: 80px;
        transform: rotate(-90deg);
      }

      .donut-segment {
        fill: none;
        stroke-width: 10;
        stroke: #10b981;
      }

      .donut-segment.blue {
        stroke: #3b82f6;
      }
      .donut-segment.purple {
        stroke: #a855f7;
      }

      .donut-center {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .donut-value {
        font-size: 0.85rem;
        font-weight: 700;
        color: #1e293b;
      }

      .donut-legend {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 8px;
      }

      .legend-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .legend-row .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }

      .legend-row .dot.green {
        background: #10b981;
      }
      .legend-row .dot.blue {
        background: #3b82f6;
      }
      .legend-row .dot.purple {
        background: #a855f7;
      }

      .legend-row .label {
        height: 6px;
        width: 50px;
        background: #cbd5e1;
        border-radius: 3px;
      }

      /* Bar Chart */
      .bar-chart {
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        flex: 1;
        padding-top: 10px;
        gap: 6px;
      }

      .bar {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: flex-end;
      }

      .bar-fill {
        width: 100%;
        height: var(--height);
        border-radius: 4px 4px 0 0;
        transition: height 0.3s ease;
      }

      .bar-fill.green {
        background: linear-gradient(180deg, #10b981 0%, #06b6d4 100%);
      }

      /* Activity List */
      .activity-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
      }

      .activity-item {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .activity-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .activity-dot.green {
        background: #10b981;
      }
      .activity-dot.blue {
        background: #3b82f6;
      }
      .activity-dot.purple {
        background: #a855f7;
      }

      .activity-content {
        flex: 1;
      }

      .activity-text {
        height: 8px;
        width: 80%;
        background: #475569;
        border-radius: 3px;
        margin-bottom: 4px;
      }

      .activity-time {
        height: 6px;
        width: 40%;
        background: #cbd5e1;
        border-radius: 3px;
      }
    `,
  ],
})
export class DashboardMockupComponent {}
