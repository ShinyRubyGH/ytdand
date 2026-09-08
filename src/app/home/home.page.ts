import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  public serverUrl: string = 'http://192.168.1.15:5000'; // Default, user can change
  public videoUrl: string = '';
  public formatType: string = '1080';

  constructor() {}

  downloadVideo() {
    if (!this.videoUrl || !this.serverUrl) return;

    // Clean trailing slashes
    let baseUrl = this.serverUrl.trim();
    if (baseUrl.endsWith('/')) {
      baseUrl = baseUrl.substring(0, baseUrl.length - 1);
    }

    // Since the API now supports GET, we can just open the URL in the system browser
    // This allows the phone's native download manager to handle the binary file easily
    const downloadUrl = `${baseUrl}/api/download?url=${encodeURIComponent(this.videoUrl)}&format=${encodeURIComponent(this.formatType)}`;
    
    // Open in system browser
    window.open(downloadUrl, '_system');
    
    // Clear the input after clicking
    this.videoUrl = '';
  }
}
